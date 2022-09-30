import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <div className="blog-container">
        <div className="blog-title-container">
          <div className="blog-element">
            <p className="blog-title">
              What are the benefits of learning a second language.
            </p>
            As mentioned before, learning a new language is a wonderful benefit
            in a globalized world. Let’s have a look at some of the benefits of
            learning a second language.
            <ol className="blog-list-item">
              <li className="blog-list-container">
                <span className="blog-list-item-title">
                  It improves your memory
                </span>{" "}
                The more you use your brain to learn new skills, the more your
                brain’s functions work. Learning a new language pushes your
                brain to get familiar with new grammar and vocabulary rules. It
                allows you to train your memory to remember new words, make
                connections between them, and use them in contextual situations.
              </li>
              <li className="blog-list-container">
                <span className="blog-list-item-title">
                  Enhances your ability to multitask{" "}
                </span>
                Time management and multitasking are two skills that will always
                help you. Multilingual people have the ability to switch between
                languages. Their ability to think in different languages and be
                able to communicate in more than one language helps with
                multitasking.{" "}
              </li>
              <li className="blog-list-container">
                <span className="blog-list-item-title">
                  Improves your performance in other academic areas{" "}
                </span>
                Fully immersing yourself in a language learning environment
                means not only learning the basics of that language.{" "}
              </li>
            </ol>
            It means learning how to communicate in another language with your
            peers or participating in extracurricular activities in that
            specific language.
          </div>
    <hr />
          <div className="blog-element">
            <p className="blog-title">
              Top tips from experts to learn a language quickly
            </p>

            <ul className="blog-list-item">
              <li className="blog-list-container">
                <span className="blog-list-item-title">
                  Take risks and speak the language whenever you can.
                </span>{" "}
              </li>
              <li className="blog-list-container">
                <span className="blog-list-item-title">
                  Read children's books and comic books in the foreign language.
                </span>
              </li>
              <li className="blog-list-container">
                <span className="blog-list-item-title">
                  Consume foreign language media.
                </span>
              </li>
              <li className="blog-list-container">
                <span className="blog-list-item-title">
                  Immerse yourself in the local culture.
                </span>
              </li>
              <li className="blog-list-container">
                <span className="blog-list-item-title">
                  Make use of free foreign language podcasts and apps.
                </span>
              </li>
              <li className="blog-list-container">
                <span className="blog-list-item-title">
                  Don't practice in isolation; get feedback from native
                  speakers.
                </span>
              </li>
              <li className="blog-list-container">
                <span className="blog-list-item-title">
                  Don't worry about making mistakes.
                </span>
              </li>
            </ul>
          </div>
          <hr />
          <div className="blog-element">
            <p className="blog-title">
            What is the most spoken language in the world?
            </p>
            Online language platform Expresize reports that English is the most spoken language in the world, with a number of speakers totaling more than 1.4 billion in 2022, according to Statistic & Data. This combines both native and non-native speakers. If you shift the definition strictly to native speakers, Expresize reports that Chinese – a designation including Mandarin along with a number of other dialects is the winning language, with 1.3 billion native speakers. Mandarin itself is the second most spoken language in the world.
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
