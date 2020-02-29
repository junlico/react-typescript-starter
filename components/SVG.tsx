import clsx from 'clsx';

type SVGProps = {
  className?: string;
  data: string;
};

const SVG: React.FC<SVGProps> = props => {
  const { className, data } = props;

  const cls = clsx('svg', className);

  return (
    <object type="image/svg+xml" className={cls} data={data}>
      <param name="src" value={data} />
    </object>
  );
};

export default SVG;
