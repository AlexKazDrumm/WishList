import { useState } from "react";
import Header from "../src/components/Header/Header";
import Notifier from "../src/components/Notifier/Notifier";
import Footer from "../src/components/Footer/Footer";
import Lending from "../src/processes/MainPageWay/Lending/Lending";

function MainPage() {
    const [alerts, setAlerts] = useState([])
    const [selectedBlock, setSelectedBlock] = useState(1)

    const renderSelectedBlock = () => {
        switch (selectedBlock) {
            case 1: return <Lending />;
            default: return <Lending />;
        }
    };
  
    return (
        <div>
            <Notifier alerts={alerts} />
            <Header/>
            { renderSelectedBlock() }
            {/* <Footer /> */}
        </div>
    );
}

export default MainPage;