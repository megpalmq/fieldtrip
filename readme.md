## Field Trip Project 📚

### Project Summary 📝

This project is an interactive website dedicated to showcasing the Bandolier Bag artifact at the Eiteljorg Museum. The Bandolier Bag is a stunning example of Indigenous artistry, often created with vibrant colors, intricate beadwork, and rich cultural symbolism. These bags were not just decorative, but also held ceremonial and social significance.

I chose this artifact because of its blend of history, craftsmanship, and storytelling — it’s a powerful way to connect users to Indigenous cultures through a digital, interactive experience. My goal was to create a site that feels visually dynamic while also educating users through engaging features like scroll animations, interactive image hovers, and a timeline.

---

### Core Webpages 💻

- **Home (index.html)**  
  A welcoming introduction to the exhibit with a hero image and navigation links. Features smooth transitions and scroll-based effects.

- **Bag Artifact (bag.html)**  
  Displays images of multiple Bandolier Bags. When users hover over each image, informational overlays appear, offering context about the designs, materials, and history. Also has clicksble interaction to learn fmore about that specfic bag.

- **Timeline (timeline.html)**  
  An animated vertical timeline that highlights key historical moments of the Bandolier Bag. Each point reveals information when the user scrolls — and unreveals when scrolling back up.


---

### Design Choices 🎨

- **Styling Inspiration**  
  - Inspired by museum websites and Indigenous digital archives. Referenced sites like the [Eiteljorg Museum](https://eiteljorg.org/).

- **Color Palette**  
  - **Deep Red (#dd3939):** Used for borders and accents, symbolizing strength and tradition.   
  - **Gradient Black-to-Gray:** Used for dramatic hero backgrounds and to create visual depth.

- **Typography**  
  - Used clear, legible fonts to make historical information accessible and educational. Headers use bold serif styles for a historical tone, while body text remains clean and modern.

- **Data Structure**  
  - Images are stored in an `assets/images` folder.  
  - Web pages are structured using semantic HTML5.  
  - Timeline events are wrapped in divs with `.reveal` classes for scroll-triggered animations.  
  - JavaScript observes elements using the Intersection Observer API to apply the active/inactive states dynamically.


### Link to view site: 

fieldtrip-eta.vercel.app
