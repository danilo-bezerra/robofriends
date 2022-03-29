import Card from './Card';
import './CardList.css';

const CardList = ({ robots }) => {
    const cardsArray = robots.map((robot, index) => {
        return (
            <Card key={index} name={robot.name}/>
        )
    })

    console.log(cardsArray)
    return (
        <div className="CardList">
            {
                // robots.map((user, i) => {
                //     return (
                //         <Card
                //             key={i}
                //             id={robots[i].id}
                //             name={robots[i].name}
                //             email={robots[i].email}
                //         />
                //     );
                // })
                robots.map(({name, id, email}) => {
                    return (
                        <Card 
                        key={id}
                        id={id} 
                        name={name} 
                        email={email}/>
                    )
                })
            }
        </div>
    );
}

export default CardList;