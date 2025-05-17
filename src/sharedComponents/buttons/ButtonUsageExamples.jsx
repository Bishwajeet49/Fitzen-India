import React from 'react';
import { FiPlus, FiArrowRight, FiSearch, FiTrash, FiEdit } from 'react-icons/fi';
import { Button, IconButton } from './index';

/**
 * Component showing examples of Button and IconButton usage
 * This file is for reference only and not intended to be imported into the actual application
 */
const ButtonUsageExamples = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Basic Button Examples</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="text">Text Button</Button>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">Small Button</Button>
          <Button variant="primary" size="md">Medium Button</Button>
          <Button variant="primary" size="lg">Large Button</Button>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Full Width Button</h2>
        <div className="max-w-sm">
          <Button variant="primary" fullWidth>Full Width Button</Button>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Disabled Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>Disabled Primary</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
          <Button variant="text" disabled>Disabled Text</Button>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Buttons with Custom Classes</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary" 
            className="uppercase tracking-wider"
          >
            Uppercase Button
          </Button>
          <Button 
            variant="outline" 
            className="border-dashed border-red-500 text-red-500 hover:bg-red-50"
          >
            Custom Styled
          </Button>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <IconButton 
            variant="primary" 
            icon={<FiPlus />}
            position="left"
          >
            Add New
          </IconButton>
          <IconButton 
            variant="outline" 
            icon={<FiArrowRight />}
            position="right"
          >
            Continue
          </IconButton>
          <IconButton 
            variant="primary" 
            icon={<FiSearch />}
            position="only"
          />
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Icon Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <IconButton 
            variant="primary" 
            size="sm"
            icon={<FiEdit />}
            position="only"
          />
          <IconButton 
            variant="primary" 
            size="md"
            icon={<FiEdit />}
            position="only"
          />
          <IconButton 
            variant="primary" 
            size="lg"
            icon={<FiEdit />}
            position="only"
          />
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Rounded Icon Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <IconButton 
            variant="primary" 
            icon={<FiTrash />}
            position="only"
            rounded
          />
          <IconButton 
            variant="secondary" 
            icon={<FiEdit />}
            position="only"
            rounded
          />
          <IconButton 
            variant="outline" 
            icon={<FiPlus />}
            position="only"
            rounded
          />
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Button as Link</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary"
            as="a"
            href="#"
          >
            Link Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonUsageExamples; 