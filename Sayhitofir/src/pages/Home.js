import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <main>
                <h1>Welcome to Primal Movement</h1>
                <p>Your journey to better movement starts here.</p>
                <section>
                    <h2>Our Programs</h2>
                    <p>Explore our range of programs designed to enhance your physical capabilities.</p>
                </section>
                <section>
                    <h2>About Us</h2>
                    <p>Learn more about our mission and values.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;