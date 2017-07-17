class MinHeap {
  constructor() {
    this.store = [];

    this.peekMin = this.peekMin.bind(this);
    this.insert = this.insert.bind(this);
    this.extractMin = this.extractMin.bind(this);
    this.parentIndex = this.parentIndex.bind(this);
    this.parentValue = this.parentValue.bind(this);
    this.childIndices = this.childIndices.bind(this);
    this.childValues = this.childValues.bind(this);
  }

  peekMin() {
    return this.store[0];
  }

  insert(value) {
    this.store.push(value);
    let currentIndex = this.store.length - 1;
    let parentIndex = this.parentIndex(currentIndex);
    let currentValue = this.store[currentIndex];
    let parentValue = this.store[parentIndex];
    while (currentIndex > 0 && (currentValue < parentValue)) {
      let tempValue = currentValue;
      this.store[currentIndex] = parentValue;
      this.store[parentIndex] = tempValue;

      currentIndex = parentIndex;
      parentIndex = this.parentIndex(currentIndex);
      parentValue = this.store[parentIndex];
    }
  }

  extractMin() {
    let minValue = this.store[0];
    this.store[0] = this.store.pop();

    let parentIndex = 0;
    let parentValue = this.store[0];

    let childIndices = this.childIndices(parentIndex);
    let childValues = this.childValues(parentIndex);
    let minChildIndex, minChildValue;

    if (!childValues[1] || (childValues[0] < childValues[1])) {
      minChildIndex = childIndices[0];
      minChildValue = childValues[0];
    } else {
      minChildIndex = childIndices[1];
      minChildValue = childValues[1];
    }

    while (minChildValue && (minChildValue < parentValue)) {
      let tempValue = minChildValue;
      this.store[minChildIndex] = parentValue;
      this.store[parentIndex] = tempValue;

      parentIndex = minChildIndex;
      childIndices = this.childIndices(parentIndex);
      childValues = this.childValues(parentIndex);

      if (!childValues[1] || (childValues[0] < childValues[1])) {
        minChildIndex = childIndices[0];
        minChildValue = childValues[0];
      } else {
        minChildIndex = childIndices[1];
        minChildValue = childValues[1];
      }
    }

    return minValue;
  }

  parentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  parentValue(idx) {
    return this.store[this.parentIndex(idx)];
  }

  childIndices(idx) {
    const leftChildIndex = (idx * 2) + 1;
    const rightChildIndex = (idx * 2) + 2;

    return [leftChildIndex, rightChildIndex];
  }

  childValues(idx) {
    return this.childIndices(idx).map(childIndex => this.store[childIndex]);
  }
}
