import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const tabs = ["Home", "Activity", "Videos", "Music"];

  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 355);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <div className="navbarComponent">
        {!isMobile && (
          <nav className="navBar">
            {tabs.map((tab) => (
              <div key={tab}>{tab}</div>
            ))}
          </nav>
        )}

        {isMobile && (
          <div className="hamburgerNav">
            <div
              className="hamburgerIcon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </div>
            {isMenuOpen && (
              <div className="dropdownMenu">
                {tabs.map((tab) => (
                  <div key={tab} className="dropdownCell">
                    {tab}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
