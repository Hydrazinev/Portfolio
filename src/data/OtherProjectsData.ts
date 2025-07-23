import ProjectData from '@/data/ProjectData.ts';

export default [
  new ProjectData(
    "project-6",
    "Academic Video and text Summarizer",
    "/img_1.png",
    `
      <div class="paragraph" style="text-align: center;">
        <img 
          src="/img_1.png" 
          alt="Academic Summarizer Preview" 
          style="width: 100%; max-width: 600px; height: auto; object-fit: contain; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-bottom: 20px; display: block;" 
        />
      </div>

      <div class="paragraph">
        <strong>Academic Video and text Summarizer</strong> helps students handle information overload by creating clear, focused summaries. It uses advanced AI (like GPT-3.5/4) to combine video and reading materials for better context. With techniques like RAG and few-shot learning, it outperforms traditional summarizers in accuracy and clarity.
      </div>
      
      <div class="paragraph">
        <strong>Code is </strong><a href="https://github.com/Hydrazinev/Academic-Video-and-text-Summarizer" target="_blank">here</a>.
      </div>
      
      <div class="paragraph">
        Technologies Used:
        <ul>
          <li>LLMs like GPT-3.5, GPT-4, and LLaMA-2 for generating summaries</li>
          <li>Retrieval-Augmented Generation (RAG) to enhance contextual understanding</li>
          <li>EDUVSUM dataset with educational videos, subtitles, and annotations</li>
          <li>Evaluation tools like G-Eval, BERTScore, and ROUGE to measure summary quality</li>
        </ul>
      </div>
    `,
    "#c10606",
    false,
    false
  ),

  new ProjectData(
    "project-7",
    "Solar Insolation forecasting",
    "/img_2.png",
    `
      <div class="paragraph" style="text-align: center;">
        <img 
          src="/img_2.png" 
          alt="Solar Insolation Forecasting Preview" 
          style="width: 100%; max-width: 600px; height: auto; object-fit: contain; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-bottom: 20px; display: block;" 
        />
      </div>

      <div class="paragraph">
        <strong>Solar-Insolation-forecasting</strong><br>
        When I was an intern at <strong>ISRO</strong>, I built a machine learning model with over 92% accuracy to predict solar insolation in Jodhpur and Rewa. Improved solar power efficiency by 20% by aligning energy output with peak sunlight hours. Used 10+ years of weather data and created easy-to-use pipelines for training and testing the model.
        <br/>Code is <a target="_blank" href="https://github.com/Hydrazinev/Hydrazinev-Solar-Insolation-forecasting">here</a>.
      </div>

      <div class="paragraph">
        Main features:
        <ul>
          <li>Forecast solar insolation for Jodhpur and Rewa using ML</li>
          <li>Utilizes 10+ years of weather data</li>
          <li>Optimizes energy output with sunlight prediction</li>
          <li>Scalable pipelines for data preprocessing and model evaluation</li>
          <li>Visual outputs for energy planning decisions</li>
        </ul>
      </div>
    `,
    "#1ca1e2",
    false,
    true
  ),

  new ProjectData(
    "project-9",
    "Neural Network from scratch",
    "/img_3.png",
    `
      <div class="paragraph" style="text-align: center;">
        <img 
          src="/img_3.png" 
          alt="Neural Network From Scratch" 
          style="width: 100%; max-width: 600px; height: auto; object-fit: contain; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-bottom: 20px; display: block;" 
        />
      </div>

      <div class="paragraph">
        <strong>Neural Network from scratch</strong> is a repository containing the implementation of a neural network built entirely from scratch without using external machine learning libraries. Demonstrates core concepts like forward propagation, backpropagation, and gradient descent using only Python.
      </div>

      <div class="paragraph">
        <div class="notice">
          Source code available on <a href="https://github.com/Hydrazinev/Neural-Network-from-scratch" target="_blank">GitHub</a>.
        </div>
      </div>
    `,
    "#c10606",
    false,
    true
  ),

  new ProjectData(
    "",
    "H&M Reviews and images scraper",
    "/img_4.png",
    `
      <div class="paragraph" style="text-align: center;">
        <img 
          src="/img_4.png" 
          alt="H&M Scraper" 
          style="width: 100%; max-width: 600px; height: auto; object-fit: contain; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-bottom: 20px; display: block;" 
        />
      </div>

      <div class="paragraph">
        <strong>H&M Reviews and images scraper</strong> is a Python-based web scraper designed to extract customer reviews and product images from the H&M website. Useful for sentiment analysis, product research, and visual content analysis.
        <br/>
        <br/>Code is <a target="_blank" href="https://github.com/Hydrazinev/H-M-Reviews-and-images-scraper">here</a>.
      </div>

      <div class="paragraph">
        Main features:
        <ul>
          <li>Scrapes H&M reviews and images with Python</li>
          <li>Supports sentiment and product performance analysis</li>
          <li>Generates generic customer reviews for simulations</li>
          <li>Outputs structured data for ML pipelines</li>
        </ul>
      </div>

      <div class="paragraph">
        <div class="notice">
          Source code available on <a href="https://github.com/Hydrazinev/H-M-Reviews-and-images-scraper" target="_blank">GitHub</a>.
        </div>
      </div>
    `,
    "#1ca1e2"
  )
];
