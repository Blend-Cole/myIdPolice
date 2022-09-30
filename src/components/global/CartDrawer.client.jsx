import {Drawer} from './Drawer.client';

export function CartDrawer({isOpen, onClose}) {
  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
      <div className="grid">
        Cart Details
      </div>
    </Drawer>
  );
}
