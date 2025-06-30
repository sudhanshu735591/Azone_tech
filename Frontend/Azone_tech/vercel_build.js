import { execSync } from 'child_process';

try {
  console.log('Running npm install...');
  execSync('npm install', { stdio: 'inherit' });

  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}