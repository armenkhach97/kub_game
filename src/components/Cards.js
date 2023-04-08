import {useState, useRef, useEffect} from 'react';

const Cards = ({profile, setProfile, isLoggedIn}) => {
    const [isCardClicked, setIsCardClicked] = useState(false);
    const promptRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (promptRef.current && promptRef.current.contains(event.target)) {
                setIsCardClicked(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    const handleCardClick = () => {
        if (isLoggedIn) {
            setIsCardClicked(true);
        } else {
            // Handle card click

        }
    };

    return (
        <div className="rummy-wrapper">
            <div className="body_container">
                <div className="app_logo"><img src="/assets/Logo.png" alt="rummy"/></div>
                <div className="rummy_cards">

                    <div className="rummy_card" onClick={handleCardClick}><img src="/assets/card1.png" alt="card"/>
                    </div>
                    <div className="rummy_card" onClick={handleCardClick}><img src="/assets/card2.png" alt="card"/>
                    </div>
                </div>
                {isCardClicked && isLoggedIn && <div className="login_prompt" ref={promptRef}>Please log in</div>}

            </div>
        </div>
    );
};

export default Cards;