export function PageTitle({ num, text }) {
  return (
    <h5 className="page-title">
      {num}
      <span>{text}</span>
    </h5>
  );
}
