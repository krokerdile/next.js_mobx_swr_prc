import countStore from '@/stores/CountStore';
import { observer } from 'mobx-react';

const Count = observer(() => {
  return (
    <div>
      <p>{countStore.number}</p>
      <button onClick={countStore.increase} type="button">
        +
      </button>
      <button onClick={countStore.decrease} type="button">
        -
      </button>
    </div>
  );
});

export default Count;
