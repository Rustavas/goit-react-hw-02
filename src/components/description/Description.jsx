import css from "./Description.module.css"

const Description = () => {
  return (
    <div className={css.contDescription}>
      <h1 className={css.headDescription}>Sip Happens Café</h1>
      <p className={css.textDescription}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
