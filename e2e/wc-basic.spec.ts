import {expect, test} from '@playwright/test';

test.describe('workflow-editor web component — basic flows', () => {
  test('add/delete via toolbar inside shadow DOM (no ready wait)', async ({page}) => {
    await page.goto('/examples/es-module.html');

    const wc = page.locator('workflow-editor');
    await expect(wc).toBeVisible();

    // Wait for toolbar to be ready within shadow root
    await expect(wc.getByRole('button', {name: '+ Task'})).toBeVisible();

    // Read initial JSON and remember node count
    const initialNodeCount = await page.evaluate((el: any) => {
      const json = el.getJSON();
      const flow = json?.definitions?.rootElements?.[0]?.flowElements ?? [];
      return flow.filter((e: any) => e.$type !== 'bpmn:SequenceFlow').length;
    }, await wc.elementHandle());

    // Click "+ Task" button inside the shadow root to add a task
    const addTaskButton = wc.getByRole('button', {name: '+ Task'});
    await addTaskButton.click();

    // Expect a change event to fire and nodes to increase
    // Wait until node count increases (avoid fixed timeout)
    await page.waitForFunction((prev: number) => {
      const el: any = document.querySelector('workflow-editor');
      if (!el || typeof el.getJSON !== 'function') return false;
      const json = el.getJSON();
      const flow = json?.definitions?.rootElements?.[0]?.flowElements ?? [];
      const count = flow.filter((e: any) => e.$type !== 'bpmn:SequenceFlow').length;
      return count === prev + 1;
    }, initialNodeCount);

    const afterAddNodeCount = await page.evaluate((el: any) => {
      const json = el.getJSON();
      const flow = json?.definitions?.rootElements?.[0]?.flowElements ?? [];
      return flow.filter((e: any) => e.$type !== 'bpmn:SequenceFlow').length;
    }, await wc.elementHandle());

    expect(afterAddNodeCount).toBe(initialNodeCount + 1);

    // Click "Delete" — addNode selects the new node, so delete should remove it
    const deleteButton = wc.getByRole('button', {name: 'Delete'});
    await deleteButton.click();

    // Wait until node count returns to initial value
    await page.waitForFunction((expected: number) => {
      const el: any = document.querySelector('workflow-editor');
      if (!el || typeof el.getJSON !== 'function') return false;
      const json = el.getJSON();
      const flow = json?.definitions?.rootElements?.[0]?.flowElements ?? [];
      const count = flow.filter((e: any) => e.$type !== 'bpmn:SequenceFlow').length;
      return count === expected;
    }, initialNodeCount);

    const afterDeleteNodeCount = await page.evaluate((el: any) => {
      const json = el.getJSON();
      const flow = json?.definitions?.rootElements?.[0]?.flowElements ?? [];
      return flow.filter((e: any) => e.$type !== 'bpmn:SequenceFlow').length;
    }, await wc.elementHandle());

    expect(afterDeleteNodeCount).toBe(initialNodeCount);
  });
});
