import Section from './core/Section';
import Icon from './core/Icon';
import Link from './core/Link';

export default class Contact extends React.Component {
  render() {
    const ingredients = [{
      name: 'GitHub',
      href: 'https://github.com/Etskh',
      icon: 'github',
    }];
    return <Section name="contact">
      <div className="container">
        <div className="row">{ingredients.map( ingredient => {
            return <div className="col" key={ingredient.name}>
              <Link isExternal={true} href={ingredient.href}>
                <Icon size={3} icon={ingredient.icon}/>
              </Link>
            </div>;
        })}</div>
      </div>
    </Section>;
  }
}
