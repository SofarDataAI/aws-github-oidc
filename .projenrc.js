const { awscdk, github, TextFile, javascript } = require('projen');

const nodejsVersion = '20.15.1';

const project = new awscdk.AwsCdkConstructLibrary({

  // Metadata
  stability: 'experimental',
  authorName: 'Sofar Datas',
  authorOrganization: false,
  authorAddress: 'chitrung09t2@gmail.com',
  name: 'aws-github-oidc',
  description: 'CDK constructs to use OpenID Connect for authenticating your Github Action workflow with AWS IAM',
  repositoryUrl: 'https://github.com/SofarDatas/aws-github-oidc.git',
  keywords: ['cdk', 'aws-cdk', 'awscdk', 'aws', 'iam', 'github', 'github-actions', 'oidc', 'openid-connect'],

  // Publish configuration
  defaultReleaseBranch: 'main',
  majorVersion: 2, // we default release the main branch(cdkv2) with major version 2.
  packageManager: javascript.NodePackageManager.NPM,
  npmAccess: javascript.NpmAccess.PUBLIC,
  publishToPypi: {
    distName: 'aws-cdk-github-oidc',
    module: 'aws_cdk_github_oidc',
  },
  publishToGo: {
    moduleName: 'github.com/aripalo/aws-cdk-github-oidc-go',
  },

  // Dependencies
  minNodeVersion: nodejsVersion,
  cdkVersion: '2.155.0',
  constructsVersion: '10.3.0',
  peerDeps: ['constructs', 'aws-cdk-lib'],
  devDeps: ['@types/github-username-regex', 'constructs'],
  bundledDeps: [],

  // Gitignore
  gitignore: [
    '.DS_Store',
    '/examples/**/cdk.context.json',
    '/examples/**/node_modules',
    '/examples/**/cdk.out',
    '/examples/**/.git',
    '**/*.drawio.bkp',
  ],

  tsconfig: {
    compilerOptions: {
      esModuleInterop: true, // required for github-username-regex
    },
  },


  codeCov: true,
});

new TextFile(project, '.nvmrc', {
  lines: [nodejsVersion],
});

project.synth();
