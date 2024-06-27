const useAuthByPass = (): boolean => {
  return import.meta.env.MODE === "development!";
};

export { useAuthByPass };
