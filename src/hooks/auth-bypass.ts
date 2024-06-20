const useAuthByPass = (): boolean => {
  return import.meta.env.MODE === "development1";
};

export { useAuthByPass };
