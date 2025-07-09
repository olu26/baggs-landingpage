import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import phoneCard from "../data.js";
import { allIcons } from "../data.js";
import { features } from "../data.js";
import iphone from "../assets/iphone13.png";
import image1 from "../assets/firstBlurPic.png";
import { painPoints } from "../data.js";

export const Home = () => {
  return (
    <>
      <div className="hero-section">
        <p className="hero-title">
          {" "}
          <span className="hero-highlight">Level Up </span>Your Student Money
          Game
        </p>
        <p className="hero-paragraph">
          BAGG makes it easy to save, budget, invest and borrow on your own
          terms. <br /> No stress. No guesswork. Just smart tools made for
          students like you!
        </p>
      </div>
      <div className="hero-btn">
        <button className="joinList">Join waitlist</button>
        <div className="learn">
          <a href="">Learn more</a>
          <FaArrowDown className="arrow-down" />
        </div>
      </div>

      <section className="phoneCard-section">
        <div className="phoneCard-container">
          {phoneCard.map((image) => {
            return (
              <div className="phoneCard" key={image.id}>
                <img src={image.src} alt={image.alt} />
              </div>
            );
          })}
        </div>
      </section>

      <div className="phoneCard-text">
        <p>
          We have been recognized by African Leadership College of Higher
          Education <br /> and Mauritius Commercial Bank.
        </p>

        <div className="phone-card-images">
          <div className="myphotos">
            {allIcons.map((element) => (
              <img src={element.src} key={element.id} />
            ))}
          </div>
        </div>
      </div>

      {/* third components  */}
      <section className="bigger-container">
        <div className="peer-loaning">
          <p>Peer to Peer Loans</p>
          <div className="peer-heading">
            <p>
              Need quick cash for school, <br /> transport, or a small hustle?
            </p>
          </div>
          <div>
            <p className="peer-paragraph">
              BAGG connects you with friends and family who can lend you money
              at low or no interest. No banks, no hassle, just support from your
              community.
            </p>
          </div>
        </div>

        <div className="comparison-container">
          {/* Left: List */}
          <div className="comparison-list">
            {painPoints.map((point, index) => (
              <div
                className={`list-item ${
                  index < 4 || index >= painPoints.length - 4 ? "faded" : ""
                }`}
                key={index}
              >
                <p className="cross-icon">✕</p>
                <p>{point}</p>
              </div>
            ))}
          </div>

          {/* Middle: VS */}
          <div className="comparison-divider-vertical">
            <span>VS</span>
          </div>

          {/* Right: Image + Text */}
          <div className="comparison-graphic">
            <img
              src={image1}
              alt="Make your Money Work"
              className="comparison-image"
            />
            <p className="comparison-caption">
              <strong>Make your Money Work</strong>
              <br />
              Browse verified student needs, lend with confidence and earn
              positive income.
            </p>
          </div>
        </div>

        {/* fifthe components */}
        <div className="fifth-components">
          <div>
            <p className="peer-paragraph">
              <div className="peer-loaning">
                <p>Smart Savings</p>
                <div className="peer-heading">
                  <p>Save Smarter, Spend Wiser</p>
                </div>
                <div>
                  <p className="paragraph-two">
                    Tired of wondering where your money goes? <br />
                    BAGG helps you automate savings, track every expense and
                    stick to your <br /> budget.
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="sixth-components">
          <div className="sixth-container">
            <div className="sixth-image">
              <img src={iphone} />
              <h1>Track it, Save it, BAGGS it.</h1>
              <p>
                Weekly Reminders, goal-based savings and spending insights; All
                built for students.
              </p>
            </div>
            <div className="sixth-text">
              {features.map((feature) => {
                return (
                  <div className="feature-card-container">
                    <div className="feature-card" key={feature.title}>
                      <div className="feature-icon">{feature.icon}</div>
                      <div>
                        <p className="feature-title">{feature.title}</p>
                        <h3 className="feature-desc">{feature.desc}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* seventh components  */}
      </section>
    </>
  );
};
