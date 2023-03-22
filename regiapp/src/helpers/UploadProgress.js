function computeProgress({ loaded, total }) {
  return Math.floor((loaded * 100) / total);
}

export { computeProgress };
