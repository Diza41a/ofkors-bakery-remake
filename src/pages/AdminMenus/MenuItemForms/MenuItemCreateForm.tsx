import { Controller, useForm } from 'react-hook-form';
import Button from '../../../components/Button';
import { Input, TextArea } from '../../../components/Inputs';
import S from './styled';
import { createMenuItem } from '../../../api/menuItemsAPI';
import type { MenuCategory } from '../../../types/Menu';

type NewMenuItemFormInputs = {
  name: { en: string; uk: string; ru: string };
  category: MenuCategory;
  description: { en: string; uk: string; ru: string };
  price: number;
};

const MenuItemCreateForm = (): JSX.Element => {
  const { handleSubmit, control, reset, setFocus } = useForm<NewMenuItemFormInputs>({
    defaultValues: {
      name: { en: '', uk: '', ru: '' },
      category: 'coffee_and_drinks',
      description: { en: '', uk: '', ru: '' },
      price: 0,
    }
  });

  const onSubmit: (data: NewMenuItemFormInputs) => void = (data) => {
    createMenuItem(data)
      .then(() => {
        reset();
        setFocus('name.en');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <S.MenuItemForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        Name
        <Controller
          name="name.en"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder='English' />
          )}
        />
        <Controller
          name="name.uk"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder='Українська' />
          )}
        />
        <Controller
          name="name.ru"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder='Русский' />
          )}
        />
      </div>
      <div>
        Category
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value="coffee_and_drinks">Coffee & Drinks</option>
              <option value="baked_goods">Baked Goods</option>
              <option value="breakfast_and_lunch">Breakfast & Lunch</option>
              <option value="desserts">Desserts</option>
            </select>
          )}
        />
      </div>
      <div>
        Description
        <Controller
          name="description.en"
          control={control}
          render={({ field }) => (
            <TextArea {...field} placeholder='English' />
          )}
        />
        <Controller
          name="description.uk"
          control={control}
          render={({ field }) => (
            <TextArea {...field} placeholder='Українська' />
          )}
        />
        <Controller
          name="description.ru"
          control={control}
          render={({ field }) => (
            <TextArea {...field} placeholder='Русский' />
          )}
        />
      </div>
      <div>
        Price
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <Input {...field}
            type="number"
            placeholder='price' />
          )}
        />
      </div>
      <Button type='submit'>Submit</Button>
    </S.MenuItemForm>
  )
};

export default MenuItemCreateForm;
