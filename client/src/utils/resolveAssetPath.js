export const resolveAssetPath = (path) => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\/+/, "")}`;
};

export default resolveAssetPath;