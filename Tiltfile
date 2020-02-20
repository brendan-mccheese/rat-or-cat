repo = local_git_repo('.')

k8s_yaml('packages/frontend/serve.yml')
k8s_yaml('packages/image-service/serve.yml')


docker_build('rat-or-cat/frontend', 'packages/frontend',
  dockerfile='./packages/frontend/serve.dockerfile',
  live_update=[
    fall_back_on(['package.json', 'package-lock.json']),
    sync('./packages/frontend', '/src'),
  ])

docker_build('rat-or-cat/image-service', 'packages/image-service',
  dockerfile='./packages/image-service/serve.dockerfile',
  live_update=[
    fall_back_on(['package.json', 'package-lock.json']),
    sync('./packages/image-service', '/src'),
  ])

k8s_resource('rat-or-cat-frontend', port_forwards=4200)
k8s_resource('rat-or-cat-image-service', port_forwards=3000)
