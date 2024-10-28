import Button from '../../../components/Button';
import { Input, TextArea } from '../../../components/Inputs';
import S from './styled';

const MenuItemCreateForm = (): JSX.Element => {
  return (
    <S.MenuItemForm>
      <div>
        Name
        <Input placeholder='en' />
        <Input placeholder='uk' />
        <Input placeholder='ru' />
      </div>
      <div>
        Category
        <select>
          <option value="coffee_and_drinks">Coffee & Drinks</option>
          <option value="baked_goods">Baked Goods</option>
          <option value="breakfast_and_lunch">Breakfast & Lunch</option>
          <option value="desserts">Desserts</option>
        </select>
      </div>
      <div>
        Description
        <TextArea placeholder='en' rows={5} />
        <TextArea placeholder='uk' rows={5} />
        <TextArea placeholder='ru' rows={5} />
      </div>
      <div>
        Price
        <Input type="number" placeholder='price' />
      </div>
      <Button type='submit'>Submit</Button>
    </S.MenuItemForm>
  )
};

export default MenuItemCreateForm;
