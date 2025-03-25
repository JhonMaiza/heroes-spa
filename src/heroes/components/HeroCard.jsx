import { Link } from 'react-router-dom';

const CharacterByhero = ({ characters, alter_ego }) => {
  // if( characters === alter_ego ) return (<></>);
  // return <p>{ characters }</p>;
  return ( characters === alter_ego )
  ? <></>
  : <p>{ characters }</p>;
};

export const HeroCard = ({ 
  alter_ego, 
  characters, 
  first_appearance, 
  id, 
  publisher,
  superhero, 
}) => {

  // const heroImageUrl = `/assets/heroes/${ id }.jpg`;
  const heroImageUrl = `./heroes/${ id }.jpg`;
  // const charactersByHero = (<p>{ characters }</p>);

  return (
    <div className="col  animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={ heroImageUrl } alt={ superhero } className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{ superhero }</h5>

              {/* <p className="card-text">{ alter_ego }</p>
              {
                ( alter_ego !== characters ) && (
                  <p>{ characters }</p>
                )
              } */}

              <p className="card-text">{ alter_ego }</p>
              <CharacterByhero 
                characters={ characters } 
                alter_ego={ alter_ego }
              />
              
              <p className="card-text">
                <small className="text-muted">{ first_appearance }</small>
              </p>

              <Link to={`/heroe/${ id }`}>
                Más..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}