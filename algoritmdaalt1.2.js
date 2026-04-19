class KNN {
  constructor(k = 3) {
    this.k = k;
    this.X_train = [];
    this.y_train = [];
  }

  fit(X_train, y_train) {
    this.X_train = X_train;
    this.y_train = y_train;
  }

  euclideanDistance(a, b) {
    return Math.sqrt(a.reduce((sum, val, i) => sum + (val - b[i]) ** 2, 0));
  }

  predict(X_test) {
    return X_test.map(x => {
      // зайг тооцоолох
      const distances = this.X_train.map((trainPoint, i) => ({
        distance: this.euclideanDistance(x, trainPoint),
        label: this.y_train[i]
      }));

      // хамгийн ойр k хөршүүдийг сонгох
      distances.sort((a, b) => a.distance - b.distance);
      const kNeighbors = distances.slice(0, this.k);

      // хөршүүдийн ангиллыг тоолох
      const counts = {};
      kNeighbors.forEach(n => {
        counts[n.label] = (counts[n.label] || 0) + 1;
      });

      // хамгийн олон давтагдсан ангиллыг сонгох
      return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    });
  }
}

const X_train = [
  [38, 3], // халуурсан, ханиалгасан
  [37, 2], // халуураагүй, толгой өвдсөн
  [39, 1]  // халуурсан, амьсгал давчдсан
];

const y_train = ["Томуу", "Мигрень", "Уушгины үрэвсэл"];

const knn = new KNN(3);
knn.fit(X_train, y_train);

// Шинэ өвчтөн: 38.5°C халуурсан, ханиалгасан
const X_test = [[38.5, 1]];
console.log(knn.predict(X_test));
