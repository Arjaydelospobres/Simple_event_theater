import Document, { Html, Head, Main, NextScript } from "next/document"; // this is the file of all document pages, component

class MyDocument extends Document {
  render() {
    return (
      // it is the full html and set to languange to english
      <Html lang="en">
        {/* all set header of different pages */}
        <Head />
        <body>
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
