export default function ButtonFilter({ button, filter }) {
  return (
    <div className="buttons container">
      {button.map((cat, i) => {
        return (
          <>
            <button type="button" onClick={() => filter(cat)} className="btn">
              {cat}
            </button>
            <br />
          </>
        );
      })}
    </div>
  );
}
