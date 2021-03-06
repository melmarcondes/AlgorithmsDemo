const Node = require('./node');
const levelWidth = require('./index');

test('levelWidth is a function', () => {
  expect(typeof levelWidth).toEqual('function');
});

test('levelWidth returns number of nodes - 3 leves', () => {
  const root = new Node(0);
  root.add(1);
  root.add(2);
  root.add(3);
  root.children[0].add(4);
  root.children[2].add(5);

  expect(levelWidth(root)).toEqual([1, 3, 2]);
});

test('levelWidth returns number of nodes at widest point - 4 levels', () => {
  const root = new Node(0);
  root.add(1);
  root.children[0].add(2);
  root.children[0].add(3);
  root.children[0].children[0].add(4);

  expect(levelWidth(root)).toEqual([1, 1, 2, 1]);
});

test('levelWidth returns number of nodes at widest point - 5 levels', () => {
  const root = new Node(0);
  root.add(1);
  root.children[0].add(2);
  root.children[0].add(3);
  root.children[0].children[0].add(4);
  root.children[0].children[1].add(5);
  root.children[0].children[1].children[0].add(6);

  expect(levelWidth(root)).toEqual([1, 1, 2, 2, 1]);
});
