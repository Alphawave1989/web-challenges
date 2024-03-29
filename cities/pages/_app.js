import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>
        <GlobalStyle />
        <Component {...pageProps} />
      </div>
    </>
  );
}
