import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import ExtraCare from '../ExtraCare/ExtraCare';
import Testimonial from '../Testimonial/Testimonial';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Services></Services>
            <ExtraCare></ExtraCare>
            <Testimonial></Testimonial>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;