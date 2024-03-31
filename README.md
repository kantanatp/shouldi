# Should-I

## Inspiration

Should-I draws its name from "ชุดไอ" which translates to "my outfit" in Thai. The inspiration comes from the challenges of online shopping, particularly the discomfort around sizing uncertainties and the hassle of returns. Despite the existence of virtual try-on technologies among large retailers, small businesses often lack access to such advancements. Large corporations frequently resort to the use unsustainable materials, compromising on quality to gain a competitive edge in pricing. Should-I aims to promote small retailers keen on offering high-quality, eco-friendly products at reasonable prices, providing them a platform to leverage state-of-the-art technology.

## What It Does

Should-I serves as an e-commerce platform that enriches the shopping experience by incorporating virtual try-ons and sustainability tags. It provides detailed information about retailers, emphasizing the promotion of small, local businesses committed to ethical and sustainable practices. The platform's unique features are designed to reduce the rate of product returns and promote sustainable clothing options, thereby saving time, money, and reducing waste.

## How We Built It

The platform integrates the Revery.AI API with a Flask-based application for backend processes alongside a Node.js environment. The front-end is developed using CSS, JavaScript, and HTML. The database management utilizes MySQL along with SQLAlchemy. The choice of technologies ensures a seamless and efficient user experience, catering to the needs of both retailers and customers.

## Challenges We Ran Into

Initially, we wanted to develop our own virtual try-on model. However, we quickly encountered the steep learning curve and time constraints associated with training such models to meet our high standards for accuracy and user experience.

Integrating Node.js with Flask presented another layer of complexity. We needed to ensure that the asynchronous JavaScript operations in Node.js could smoothly interface with Flask's synchronous Python environment, necessitating a deep dive into asynchronous programming and inter-process communication.

Database integration with the rest of the application also proved challenging. We aimed for real-time synchronization of data across the user interface, virtual closet, and retailer inventory, requiring a robust backend architecture and efficient database queries to prevent latency and ensure a fluid user experience.

## Accomplishments That We're Proud Of

Despite the challenges, we achieved several notable accomplishments with Should-I:

- **Seamless Virtual Try-On Experience**: Integrating Revery.AI's technology, we provided users with a realistic and responsive virtual try-on feature, setting our platform apart from traditional e-commerce websites.
  
- **Sustainability Focus**: We successfully incorporated sustainability tags and detailed retailer information, encouraging conscious shopping and highlighting small businesses committed to ethical practices.
  
- **Robust Backend Infrastructure**: Our integration of Node.js with Flask, coupled with a MySQL database, resulted in a scalable and secure platform capable of handling a growing user base and inventory.


## What We Learned

- **AI Model Training**: We gained hands-on experience in the complexities of training and integrating AI models, particularly in the context of virtual try-ons.
  
- **Cross-Technology Integration**: The necessity of merging Node.js and Flask technologies taught us lessons in asynchronous programming and the importance of middleware for cross-stack communication.
  
- **Database Management**: We deepened our understanding of relational databases and ORM, learning to manage and synchronize vast amounts of data efficiently.

- **User-Centric Design**: Focusing on UI/UX, we learned the importance of intuitive design and smooth user journeys in e-commerce platforms.

- **Sustainability in Tech**: We explored how technology can be harnessed to promote sustainability and ethical practices in the fashion industry, broadening our perspective on the impact of tech beyond traditional sectors.


## What's Next for Should-I

As we look to the future, Should-I is poised for exciting advancements that promise to further revolutionize the online shopping experience with a sustainable twist:

1. **Advanced AI Models**: We plan to develop bespoke AI models that leverage cutting-edge techniques like Generative Adversarial Networks (GANs) and Gaussian splatting. These models will enhance the virtual try-on feature by offering more accurate and lifelike representations of how clothes fit, taking into account individual body shapes and garment materials.

2. **Comprehensive Virtual Dressing Room**: We aim to evolve our platform's user interface to more closely simulate the experience of a physical dressing room. This includes interactive features allowing users to mix and match outfits, view garments from multiple angles, and receive instant feedback on fit and style.

3. **AI-Powered Fashion Insights**: Utilizing color theory and fashion trends, we're exploring AI-driven recommendations that not only match users with styles that complement their existing wardrobe but also suggest sustainable options that align with their personal style and ethical values.

4. **Integration with User Wardrobes**: A key feature in development is the ability for users to upload items from their current closets, allowing our platform to provide more personalized shopping suggestions based on their existing wardrobe and past purchases.

5. **Expanding Retailer Network**: We plan to broaden our platform to include a more diverse range of small and sustainable retailers, providing them with the tools and visibility to compete in the digital marketplace.

By focusing on these next steps, Should-I is committed to enhancing the e-commerce landscape, making sustainable shopping more accessible, enjoyable, and personal than ever before.
