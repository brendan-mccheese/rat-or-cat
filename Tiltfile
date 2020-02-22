repo = local_git_repo('.')

k8s_yaml('packages/frontend-angular/serve.yml')
k8s_yaml('packages/service-images-nest-rest/serve.yml')
k8s_yaml('packages/service-highscores-node-grpc/serve.yml')


docker_build('rat-or-cat/frontend-angular', 'packages/frontend-angular',
  dockerfile='./packages/frontend-angular/serve.dockerfile',
  live_update=[
    fall_back_on(['package.json', 'yarn.lock']),
    sync('./packages/frontend-angular', '/src'),
  ])

docker_build('rat-or-cat/service-images-nest-rest', 'packages/service-images-nest-rest',
  dockerfile='./packages/service-images-nest-rest/serve.dockerfile',
  live_update=[
    fall_back_on(['package.json', 'yarn.lock']),
    sync('./packages/service-images-nest-rest', '/src'),
  ])

docker_build('rat-or-cat/service-highscores-node-grpc', 'packages/service-highscores-node-grpc',
  dockerfile='./packages/service-highscores-node-grpc/serve.dockerfile',
  live_update=[
    fall_back_on(['package.json', 'yarn.lock']),
    sync('./packages/service-highscores-node-grpc', '/src'),
  ])

k8s_resource('rat-or-cat-frontend-angular', port_forwards=4200)
k8s_resource('rat-or-cat-service-images-nest-rest', port_forwards=3000)
k8s_resource('highscores-node-grpc', port_forwards=50051)
