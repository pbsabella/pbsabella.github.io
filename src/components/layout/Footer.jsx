import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__copyright">
                    &copy; {new Date().getFullYear()} <span className="text-bold">pbsabella</span>.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
