export const addAlert = (text, type, alerts, setAlerts) => {
    const id = new Date().getTime();
    const newAlert = { id, text, type };
    setAlerts([...alerts, newAlert]);
  
    setTimeout(() => {
      setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== id));
    }, 10000);
};