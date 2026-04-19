class KNN {
  constructor(k = 3) {
    this.k = k;        // k хөршийн тоо
    this.X_train = []; //сургалтын өгөгдлийн координатууд
    this.y_train = []; //сургалтын өгөгдлийн ангилал
  }

  fit(X_train, y_train) {
    this.X_train = X_train; // сургалтын өгөгдлийн координатуудыг хадгалах
    this.y_train = y_train; // сургалтын өгөгдлийн ангиллыг хадгалах
  }

  // Евклидийн зай тооцоолох функц
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

// Жишээ өгөгдөл
const X_train = [[1,2],[2,3],[3,3],[6,5],[7,7],[8,6]];
const y_train = ['A','A','A','B','B','B'];

const X_test = [[5,4]];

const knn = new KNN(3);
knn.fit(X_train, y_train);
console.log(knn.predict(X_test)); 
