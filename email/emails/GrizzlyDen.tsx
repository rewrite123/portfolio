import * as dotenv from "dotenv";
dotenv.config();

import React from "react";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Preview } from "@react-email/preview";
import { Font } from "@react-email/font";
import { Container } from "@react-email/container";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";

import GlobalStyles from "../src/GlobalStyles";

const GrizzlyDen = () => {
  const styles: { [s: string]: React.CSSProperties } = {
    html: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "#fefefe",
      backgroundImage:
        "url('https://isaachormel.com/images/email/creativeBackground1.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    container: {
      background: "#fff",
      padding: "5px",
    },
    jumbotron: {},
    jumbotronGraphic: {
      position: "relative",
    },
    jumbotronGraphicImage: {
      maxWidth: "100%",
    },
    jumbotronGraphicTagline: {
      position: "absolute",
      bottom: 4,
      left: 0,
      color: "#fff",
      background: "#0005",
    },
    jumbotronHeadings: {
      textAlign: "center",
    },
  };

  return (
    <Html style={styles.html}>
      <Head>
        <title>Want to grow your business? Here's how!</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Want to grow your business? Here's how!</Preview>
      <Container style={styles.container}>
        <div style={styles.jumbotron}>
          <div style={styles.jumbotronGraphic}>
            <img
              src="https://isaachormel.com/images/email/restaurantJumbotron1.jpg"
              // https://placehold.co/600x400
              alt="WebDesign"
              style={styles.jumbotronGraphicImage}
            />
            <div style={styles.jumbotronGraphicTagline}>
              <Heading as="h3" style={GlobalStyles.headings}>
                <a
                  href="https://isaachormel.com"
                  target="_blank"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Isaac Hormel{" "}
                  <span
                    style={{
                      display: "inline-block",
                      width: "10px !important",
                      height: "10px !important",
                      borderRadius: "3px",
                      fontSize: "12px",
                      border: "2px solid #fff",
                    }}
                  >
                    &#8599;
                  </span>
                </a>
              </Heading>
            </div>
          </div>
          <div style={styles.jumbotronHeadings}>
            <Heading as="h2" style={GlobalStyles.headings}>
              Is your website preventing your business from growing?
            </Heading>
            <Heading as="h3" style={GlobalStyles.headings}></Heading>
          </div>
        </div>
        <Text style={GlobalStyles.text}>
          <span style={{ fontSize: "28px" }}>Hi,</span> I'm Isaac. I'm a Hoquiam
          local and I make killer websites.
        </Text>
        <Text style={GlobalStyles.text}>
          {/* I am reaching out to you today because I noticed some areas you could
          improve your website. */}
          I am reaching out to you today because I noticed your business is
          missing a vital part of it's infrastructure - a website. Did you know
          that{" "}
          <span style={{ fontWeight: "500", fontStyle: "italic" }}>
            46% of the searches on Google are for local businesses
          </span>{" "}
          😲? What do people see when they look up "restaurant near me?" Your
          business could be missing out on customers based on these results. If
          you are interested we can schedule a free consultation to discuss
          strategies to grow your online presence.
        </Text>
        <Text style={GlobalStyles.text}>
          You can also reach out to me via the links on my contact page on my
          website{" "}
          <a href="https://isaachormel.com/contact" target="_blank">
            here.
          </a>
        </Text>
        <Heading
          as="h2"
          style={{
            ...GlobalStyles.headings,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          How to grow your online presence?
        </Heading>
        <Heading as="h3" style={{ ...GlobalStyles.headings }}>
          📱 Mobile-friendly website
        </Heading>
        <Text style={GlobalStyles.text}>
          Customers form their opinion about a company in the first 50
          milliseconds. The first place a user is likely to visit is your
          website via their phone or tablet. If you can impress users in their
          first interaction with your business it will increase their enthusiasm
          and drive sales.
        </Text>
        <Heading as="h3" style={{ ...GlobalStyles.headings }}>
          Strong 💪SEO
          <span
            style={{
              display: "inline-block",
              transform: "scale(-1, 1)",
            }}
          >
            💪
          </span>{" "}
          practices
        </Heading>
        <Text style={GlobalStyles.text}>
          Following the best SEO practices insures that your business appears
          higher up in search results. Currently your business is ranked number
          10 on Google Maps and you don't have a website to represent yourself
          on Google Search when searching the term "restaurants hoquiam
          washington." And despite your good scores on Yelp and Google Maps, you
          aren't you listed in the top five results with a{" "}
          <span style={{ display: "inline-block", fontSize: "13px" }}>
            (4.5<span style={{ color: "#FF9800" }}>&#x2730;</span>/5
            <span style={{ color: "#FF9800" }}>&#9733;</span>)
          </span>{" "}
          rating. You even have a higher score than some of the other businesses
          that appear before yours.
          <img
            src="https://isaachormel.com/images/email/Grizzly-Den/MissedOpportunities.jpg"
            alt="GoogleSearchResults"
            style={{ maxWidth: "100%", marginTop: "5px" }}
          />
        </Text>
        <Heading as="h3" style={{ ...GlobalStyles.headings }}>
          Include an 🍔 online menu & 🚚 food truck locations
        </Heading>
        <Text style={GlobalStyles.text}>
          An online menu is helpful to for customers who are unsure of what they
          want to order. Not having an online menu outside of Google Maps photos
          can turn off customers who visit your site and can even become
          outdated over time as the menu changes.
        </Text>
        <Text style={GlobalStyles.text}>
          To maximize your food truck's success, it would also be pertinent to
          list it's menu as well as it's locations for customers.
        </Text>
        <Heading as="h3" style={{ ...GlobalStyles.headings }}>
          Social media presence 😎
        </Heading>
        <Text style={GlobalStyles.text}>
          Regularly posting photos of your food truck and restaurant on apps
          like Instagram and Facebook grows enthusiam for your business. This
          will entice customers looking for good food options in the area. You
          can also increase your rating on Google Maps and Yelp if you can
          remind your customers to post reviews in store with a plackard or
          poster. You can even use a promotional food item in exchange for
          reviews.
        </Text>
        <Heading as="h3" style={{ ...GlobalStyles.headings }}>
          Take advantage of the nearby amenities
        </Heading>
        <Text style={GlobalStyles.text}>
          🏖️ Ocean Shores is less than 30 minutes away and you are the first
          restaurant people can visit when returning to Hoquiam. People staying
          at the nearby 🏨 Econo Lodge or Shiny Motel will want to enjoy a good
          meal. You are in a good position to capitalize on these potential
          customers if you can sell yourself as an icon of Hoquiam cuisine.
        </Text>

        <Heading
          as="h2"
          style={{ ...GlobalStyles.headings, textAlign: "center" }}
        >
          Still interested?
        </Heading>
        <Text style={GlobalStyles.text}>
          Don't hesitate to send me an email or text to{" "}
          {process.env.phone_number || "(555)123-4567"}. I am available to
          contact via phone any time between 10AM-5PM PST.
        </Text>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://isaachormel.com/images/phoenixWings.png"
            alt=""
            style={{ maxWidth: "200px" }}
          />
          <br />
          <Text style={{ ...GlobalStyles.text, margin: 0 }}>
            <a href="https://isaachormel.com/" target="_blank">
              https://isaachormel.com/
            </a>
          </Text>
          <Text style={{ ...GlobalStyles.text, fontWeight: "bold" }}>
            &#169;2023
          </Text>
        </div>
      </Container>
    </Html>
  );
};
export default GrizzlyDen;
