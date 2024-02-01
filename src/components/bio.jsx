/* eslint-disable react/prop-types */
import "../styles/bio.css";
function AnimalItem({ animal }) {
  return <li>{animal}</li>;
}

//default value when no props pass into component/not all props pass into components
AnimalItem.defaultProps = {
  animal: "dummy item",
};

//you can also put default in the destructured props
function AboutMeItem({ aboutMeItem = "dummy", isShow = false }) {
  /*To hide element -> return null, undefined, or false (0 is an exception)*/
  return isShow && <li>{aboutMeItem}</li>;
}

function AnimalList({ animals }) {
  if (!animals) {
    return <div>Loading...</div>;
  }

  if (animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return animals.map((animal) => {
    return <AnimalItem key={animal.id} animal={animal.name} />;
  });
}

function AboutMeList({ aboutMe }) {
  if (!aboutMe) {
    return <div>Loading...</div>;
  }

  if (aboutMe.length === 0) {
    return <div>There are no information about me</div>;
  }

  return aboutMe.map((element) => {
    /*React need to key to identify item in case of adding/removing/sorting/etc. of the list */
    /*key should be static, unique, and not change/generate at runtime i.e. key from database, uuid, etc.*/
    /*its fine to use uuid() to generate id, 
      but should be done on data creation, not when assigning the key */
    return (
      <AboutMeItem
        key={element.id}
        aboutMeItem={element.fact}
        isShow={element.fact.startsWith("I")}
      />
    );
  });
}

function Avatar({ url, name, size }) {
  return (
    <img className="avatar" src={url} alt={name} width={size} height={size} />
  );
}

//pass in "children" (need to be this word) for component to render children component
function Card({ children }) {
  return <div className="card">{children}</div>;
}

export function Bio() {
  const data = {
    name: "Leeroy",
    greetText: "Welcome to my website!",
    url: "https://www.shutterstock.com/image-vector/illustration-retro-style-city-pixel-600nw-2289504657.jpg",
  };
  const aboutMe = [
    { id: 0, fact: "I love animals" },
    { id: 1, fact: "I hate veggies" },
    { id: 2, fact: "this wont show up" },
  ];
  const animals = [
    { id: 0, name: "dog" },
    { id: 1, name: "cat" },
    { id: 2, name: "bird" },
  ];

  return (
    <div className="bio-container">
      <div className="intro">
        <h1>{data.greetText}</h1>
      </div>
      <p className="summary">You can find {data.name}&apos;s thoughts here.</p>
      <Card>
        <Avatar url={data.url} name={data.name} size={64} />
      </Card>
      <div>
        <h2>Here&apos;s a list of things about me</h2>
        <ul className="bio-list">
          <AboutMeList aboutMe={aboutMe} />
        </ul>
      </div>
      <div>
        <h2>Here&apos;s a list of things of my favorite animals</h2>
        <ul className="bio-list">
          <AnimalList animals={animals} />
        </ul>
      </div>
    </div>
  );
}
