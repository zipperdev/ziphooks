export const useGeolocation = () => {
    const [geolocation, setGeolocation] = useState({
        lat: null,
        lon: null
    });
    const reload = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setGeolocation({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            });
        }
    };
    useEffect(() => {
        reload();
    }, []);
    return {
        ...geolocation,
        reload
    };
};