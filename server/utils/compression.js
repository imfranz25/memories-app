import compression from 'compression';

const compressionConfig = compression({
  level: 6,
  threshold: 0,
  filter: (req, res) => {
    if (req.header('[x-no-compression')) {
      return false;
    }
    return compression.filter(req, res);
  },
});

export default compressionConfig;
