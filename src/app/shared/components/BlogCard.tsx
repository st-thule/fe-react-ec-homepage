interface IBlogCard {
  className: string;
  blogItem: Object;
}
export const BlogCard: React.FC<IBlogCard> = ({ className }) => {
  return (
    <li className={`list-item ${className} `}>
      <a className="card" href="#">
        <div className="card-img">
          <img src="assets/images/dogrun.png" alt="Identify Pomeranian" />
        </div>
        <div className="card-content">
          <div className="card-tag">
            <p>Pet knowledge</p>
          </div>
          <h3 className="card-title">
            What is a Pomeranian? How to Identify Pomeranian Dogs
          </h3>
          <p className="card-desc">
            The Pomeranian, also known as the Pomeranian (Pom dog), is always in
            the top of the cutest pets. Not only that, the small, lovely, smart,
            friendly, and skillful circus dog breed.
          </p>
        </div>
      </a>
    </li>
  );
};
