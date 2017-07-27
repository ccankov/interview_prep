class MinHeap {
  constructor() {
    this.store = [];
  }

  peekMin() {
    return this.store[0];
  }

  insert(value) {
    let currentIndex = this.store.length;
    this.store.push(value);
    let parentIndex = this.parentIndex(currentIndex);

    while (this.store[parentIndex] > this.store[currentIndex] && currentIndex > 0) {
      this.store[currentIndex] = this.store[parentIndex];
      this.store[parentIndex] = value;

      currentIndex = parentIndex;
      parentIndex = this.parentIndex(currentIndex);
    }
  }

  extractMin() {
    const minVal = this.store[0];
    this.store[0] = this.store.pop();

    let currentIndex = 0;
    let childIndices = this.childIndices(currentIndex);
    let childValues = childIndices.map(idx => this.store[idx]);

    while (this.store[currentIndex] > Math.min(...childValues)) {
      let minChildIndex;
      if (childValues[1] && (childValues[1] < childValues[0])) {
        minChildIndex = childIndices[1];
      } else {
        minChildIndex = childIndices[0];
      }

      let temp = this.store[minChildIndex];
      this.store[minChildIndex] = this.store[currentIndex];
      this.store[currentIndex] = temp;

      currentIndex = minChildIndex;
      childIndices = this.childIndices(currentIndex);
      childValues = childIndices.map(idx => this.store[idx]);
    }

    return minVal;
  }

  parentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  childIndices(idx) {
    const baseIdx = 2 * idx;
    const childIndices = [];
    if ((baseIdx + 1) < this.store.length) {
      childIndices.push(baseIdx + 1);
    }
    if ((baseIdx + 2) < this.store.length) {
      childIndices.push(baseIdx + 2);
    }
    return childIndices;
  }
}
