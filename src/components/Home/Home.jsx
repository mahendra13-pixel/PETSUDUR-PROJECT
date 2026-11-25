import React, { useState, useEffect } from 'react';
import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import Messages from '../Common/Messages';
import DonateButton from '../Donate/DonateButton';
import RecordKeeping from '../Data/RecordKeeping';


const Home = () => {
    const [user, setUser] = useState(null);
    const [messages, setMessages] = useState([]);

    // Check authentication status
    useEffect(() => {
        const checkAuth = async () => {
            try {
                // const response = await fetch('/api/auth/check/');
                // const userData = await response.json();
                // setUser(userData.user);
            } catch (error) {
                console.error('Auth check failed:', error);
            }
        };
        checkAuth();
    }, []);

    // Mobile navigation functionality
    const toggleMobileMenu = () => {
        const navLinks = document.getElementById('navLinks');
        if (navLinks) {
            navLinks.classList.toggle('active');
        }
    };

    const closeMobileMenu = () => {
        const navLinks = document.getElementById('navLinks');
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    };

    // Auto-hide messages after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setMessages([]);
        }, 5000);
        return () => clearTimeout(timer);
    }, [messages]);

    return (
        <div className="home-page">
            <Header user={user} />
            <Navbar user={user} onToggleMenu={toggleMobileMenu} onCloseMenu={closeMobileMenu} />
            <Messages messages={messages} />
             
            

            {/* Main Content Sections */}
            <HeroSection />
            <ServicesSection />
            <ImpactsSection />
            <HowWeWorkSection />
            <GallerySection />
            <SponsorsSection />
            <BlogsSection />
            <TeamMembersSection />
            
            <Footer />
        </div>
    );
};

// Hero Section Component
const HeroSection = () => (
    <section id="home" className="hero">
        <div className="container">
            <h2>PETSUDUR</h2>
            <h2>Vaccinate, Sterilize & Care</h2>
            <p>PETSUDUR is a digital platform and NGO committed to promoting animal welfare in Achham and across the Far Western region of Nepal. Through our website, we coordinate efforts to vaccinate dogs against rabies, organize sterilization programs to manage stray populations, and conduct rescue operations for dogs and other animals in need. By combining technology with community-driven initiatives, PETSUDUR strives to protect, care for, and improve the lives of animals while creating a safer environment for people and pets alike.</p>
            
        </div>
        <div className="hero-dog-photo">
            <img src="https://plus.unsplash.com/premium_photo-1726837439658-a5e046222fe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9ncyUyMHZhY2NpbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" alt="Vaccinated Dog" />
        </div>
         <DonateButton />
    </section>
);           

// Services Section Component
const ServicesSection = () => (
    <section className="services">
        <div className="container">
            <div className="services-grid">
                <div className="service-card">
                </div>
            </div>
        </div>
         <RecordKeeping />
    </section>
);

// Impacts Section Component
const ImpactsSection = () => (
    <section className="impacts">
        <div className="container">
            <h2>Impacts till now:</h2>
            <div className="stats">
                <div className="stat-item">
                    <div className="number"></div>
                    <div className="label">Dogs Registered</div>
                </div>
                <div className="stat-item">
                    <div className="number"></div>
                    <div className="label">Dogs Vaccinated,Sterilized & served</div>
                </div>
                <div className="stat-item">
                    <div className="number"></div>
                    <div className="label">Camps Held</div>
                </div>
                <div className="stat-item">
                    <div className="number" id="membersCount"></div>
                    <div className="label">Members Joined</div>
                </div>
            </div>
        </div>
    </section>
);

// How We Work Section Component
const HowWeWorkSection = () => (
    <section className="how-we-work">
        <div className="container">
            <h2>How We Work</h2>
            <div className="work-methods-scroll">
                <div className="work-methods-container">
                    <div className="method-item">
                        <div className="method-icon">💉</div>
                        <h3>We Vaccinate</h3>
                        <p>We conduct regular vaccination camps to protect dogs against rabies and other diseases, ensuring community safety and animal health.</p>
                    </div>
                    <div className="method-item">
                        <div className="method-icon">🔬</div>
                        <h3>We Sterilize</h3>
                        <p>Our sterilization programs help control stray population growth humanely, reducing suffering and improving animal welfare.</p>
                    </div>
                    <div className="method-item">
                        <div className="method-icon">❤️</div>
                        <h3>We Care</h3>
                        <p>We provide medical care, rescue services, and rehabilitation for injured and sick animals, giving them a second chance at life.</p>
                    </div>
                    <div className="method-item">
                        <div className="method-icon">📚</div>
                        <h3>We Educate</h3>
                        <p>We conduct awareness programs in communities to promote responsible pet ownership and animal welfare practices.</p>
                    </div>
                    <div className="method-item">
                        <div className="method-icon">🏥</div>
                        <h3>We Rescue</h3>
                        <p>Emergency rescue operations for animals in distress, providing immediate medical attention and shelter.</p>
                    </div>
                    <div className="method-item">
                        <div className="method-icon">🤝</div>
                        <h3>We Collaborate</h3>
                        <p>Working with local communities, government bodies, and other NGOs to maximize our impact and reach.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Gallery Section Component
const GallerySection = () => (
    <section className="gallery">
        <div className="container">
            <h2>Image Gallery</h2>
            <div className="gallery-scroll">
                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="gallery-image">Image 1</div>
                        <p>Vaccination Camp 2024</p>
                    </div>
                    <div className="gallery-item">
                        <div className="gallery-image">Image 2</div>
                        <p>Sterilization Program</p>
                    </div>
                    <div className="gallery-item">
                        <div className="gallery-image">Image 3</div>
                        <p>Community Awareness</p>
                    </div>
                    <div className="gallery-item">
                        <div className="gallery-image">Image 4</div>
                        <p>Rescue Operation</p>
                    </div>
                    <div className="gallery-item">
                        <div className="gallery-image">Image 5</div>
                        <p>Animal Care</p>
                    </div>
                    <div className="gallery-item">
                        <div className="gallery-image">Image 6</div>
                        <p>Volunteer Team</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Sponsors Section Component
const SponsorsSection = () => (
    <section className="sponsors">
        <div className="container">
            <h2>Our Sponsors & Partners</h2>
            <div className="sponsors-scroll">
                <div className="sponsors-container">
                    <div className="sponsor-item">
                        <div className="sponsor-logo">Logo 1</div>
                        <p>Animal Welfare Org</p>
                    </div>
                    <div className="sponsor-item">
                        <div className="sponsor-logo">Logo 2</div>
                        <p>Pet Care Foundation</p>
                    </div>
                    <div className="sponsor-item">
                        <div className="sponsor-logo">Logo 3</div>
                        <p>Vet Services Ltd</p>
                    </div>
                    <div className="sponsor-item">
                        <div className="sponsor-logo">Logo 4</div>
                        <p>Community Partners</p>
                    </div>
                    <div className="sponsor-item">
                        <div className="sponsor-logo">Logo 5</div>
                        <p>Health Alliance</p>
                    </div>
                    <div className="sponsor-item">
                        <div className="sponsor-logo">Logo 6</div>
                        <p>Support Foundation</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Blogs Section Component
const BlogsSection = () => (
    <section className="blogs">
        <div className="container">
            <div className="blogs-header">
                <h2>Latest Blogs & News</h2>
                <button className="write-blog-btn">WRITE BLOGS</button>
            </div>
            <div className="blogs-scroll">
                <div className="blogs-container">
                    <div className="blog-card">
                        <h3>Vaccination Camp Success</h3>
                        <p>Our recent vaccination camp reached over 200 dogs in the community, providing essential rabies protection.</p>
                        <button>Read More</button>
                    </div>
                    <div className="blog-card">
                        <h3>Sterilization Program Updates</h3>
                        <p>New partnerships allow us to expand our sterilization services to more districts this year.</p>
                        <button>Read More</button>
                    </div>
                    <div className="blog-card">
                        <h3>Community Awareness</h3>
                        <p>Educational programs helping communities understand responsible pet ownership practices.</p>
                        <button>Read More</button>
                    </div>
                    <div className="blog-card">
                        <h3>Rescue Mission</h3>
                        <p>Successful rescue of injured stray dogs and their rehabilitation stories.</p>
                        <button>Read More</button>
                    </div>
                    <div className="blog-card">
                        <h3>Volunteer Stories</h3>
                        <p>Meet our dedicated volunteers and their experiences in animal welfare work.</p>
                        <button>Read More</button>
                    </div>
                    <div className="blog-card">
                        <h3>Future Plans</h3>
                        <p>Upcoming initiatives and expansion plans for the next quarter.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Team Members Section Component
const TeamMembersSection = () => (
    <>
        {/* Team Member 1 */}
        <section className="personal-statement team-member">
            <div className="container">
                <div className="statement-content">
                    <div className="statement-photo">
                        <img src="https://scontent.fmey2-1.fna.fbcdn.net/v/t39.30808-6/574112243_826585669775197_1694218569185384036_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MIOou17djhkQ7kNvwHEaUUT&_nc_oc=AdnNC8BU8jAYEc5mlqZgyu7Mvj0b4e0ex8ZKWUxL7fhcx-inCJhdkPRpEo_4JmZfsIc&_nc_zt=23&_nc_ht=scontent.fmey2-1.fna&_nc_gid=29OMQ01JoWJuHMQT5hU3JA&oh=00_AfhaHiknPWSRtuxxtY2XQ_DXz9WTWFBmyEnVbLzw45IRpA&oe=6918F826" alt="Mahendra Kunwar" />
                    </div>
                    <div className="statement-text">
                        <h2>From Achham to Farwest</h2>
                        <p className="statement-quote">
                            "In my view, vaccinating, sterilizing, and rescuing dogs are powerful acts of kindness that protect both animals and people. Rabies is deadly, but simple vaccinations can save countless lives. Sterilization helps control the stray population humanely, while rescue and care reflect true compassion. Volunteering in such efforts is a beautiful way to give back to society and create a safer, kinder world for all."
                        </p>
                        <p className="statement-name">- Mahendra Kunwar</p>
                        <p className="statement-role">Treasurer & IT manager of PETSUDUR</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Team Member 2 */}
        <section className="personal-statement team-member">
            <div className="container">
                <div className="statement-content">
                    <div className="statement-photo">
                        <img src="https://scontent.fmey1-1.fna.fbcdn.net/v/t39.30808-6/572787064_826596473107450_1299583938111548066_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-uC_woeIwTkQ7kNvwFJXYbh&_nc_oc=AdkanYb57EW9xkHt4H42NFo15CfeYUSB3eUahHeICIsbgRGDJH4nOXa-z3w4LAb8Z_c&_nc_zt=23&_nc_ht=scontent.fmey1-1.fna&_nc_gid=_zd2O9riM4dso7YuujmjuQ&oh=00_Afjv4yB2ika01TXsikdwN1Wf6mjHR1sos9X1Ff6P8RK7iw&oe=691901F5" alt="Manoj Kunwar" />
                    </div>
                    <div className="statement-text">
                        <h2>Our Commitment</h2>
                        <p className="statement-quote">"Every animal deserves compassion and care. At PETSUDUR, we believe that by working together as a community, we can create a world where no animal suffers from neglect or abandonment. Our mission goes beyond just medical care - it's about building a society that values and protects all living beings."</p>
                        <p className="statement-name">- Manoj Kunwar</p>
                        <p className="statement-role">President of PETSUDUR</p>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Home;