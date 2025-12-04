import {expect, test} from '@playwright/test';

test.describe('workflow-editor — connect nodes', () => {
  test('create a connection programmatically via setJSON and verify', async ({page}) => {
    await page.goto('/examples/es-module.html');

    const wc = page.locator('workflow-editor');
    await expect(wc).toBeVisible();

    // Wait for toolbar to be ready inside shadow root
    await expect(wc.getByRole('button', {name: '+ Task'})).toBeVisible();

    // Count initial edges from JSON
    const initialEdgeCount = await page.evaluate((el: any) => {
      const json = el.getJSON();
      const flow = json?.definitions?.rootElements?.[0]?.flowElements ?? [];
      return flow.filter((e: any) => e.$type === 'bpmn:SequenceFlow').length;
    }, await wc.elementHandle());

    // Add two tasks via toolbar buttons in shadow root
    const addTaskButton = wc.getByRole('button', {name: '+ Task'});
    await addTaskButton.click();
    await addTaskButton.click();

    // Programmatically create a new edge between the two latest tasks via setJSON
    await page.evaluate(() => {
      const el: any = document.querySelector('workflow-editor');
      const json = el.getJSON();
      const flow = json.definitions.rootElements[0].flowElements;
      const taskIds = flow.filter((e: any) => e.$type === 'bpmn:UserTask').map((e: any) => e.id);
      if (taskIds.length >= 2) {
        const [a, b] = taskIds.slice(-2);
        flow.push({$type: 'bpmn:SequenceFlow', id: `e_${Math.random().toString(36).slice(2, 8)}`, sourceRef: a, targetRef: b, name: ''});
        el.setJSON(json);
      }
    });

    // Wait for edge count to increase after setJSON
    await page.waitForFunction((prev: number) => {
      const el: any = document.querySelector('workflow-editor');
      const json = el.getJSON();
      const flow = json?.definitions?.rootElements?.[0]?.flowElements ?? [];
      const count = flow.filter((e: any) => e.$type === 'bpmn:SequenceFlow').length;
      return count === prev + 1;
    }, initialEdgeCount);

    // Edge count increased by 1
    const edgeCount = await page.evaluate((el: any) => {
      const json = el.getJSON();
      const flow = json?.definitions?.rootElements?.[0]?.flowElements ?? [];
      return flow.filter((e: any) => e.$type === 'bpmn:SequenceFlow').length;
    }, await wc.elementHandle());

    expect(edgeCount).toBe(initialEdgeCount + 1);
  });
});
