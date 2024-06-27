const useAuthByPass = (): boolean => {
  return import.meta.env.MODE === "production";
};

export { useAuthByPass };
