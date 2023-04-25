import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Color Converter - CSS Mate</title>
        <meta
          name="description"
          content="Easily convert between HSL, CMYK, HEX, RGB, and HSV color formats with our color converter app. Our app makes it easy to switch between different color formats and find the perfect color for your design project. Use our app to streamline your color conversion process and save time on your design projects."
        />

        <meta
          name="keywords"
          content="color converter, HSL to CMYK, HEX to RGB, color formats, web design, graphic design, color matching, color selection, color conversion, color theory, color models, color space, color picker, color palette, color combinations"
        />

        <meta property="og:title" content="Color Converter" />
        <meta
          property="og:description"
          content="Easily convert between HSL, CMYK, HEX, RGB, and HSV color formats with our color converter app. Our app makes it easy to switch between different color formats and find the perfect color for your design project. Use our app to streamline your color conversion process and save time on your design projects."
        />
        <meta
          property="og:image"
          content="https://cssmate.online/openGraphTags/colorConverter.png"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://cssmate.online/converters/color-converter"
        />
      </Helmet>
      <div>zis is ze content</div>
    </div>
  );
}
