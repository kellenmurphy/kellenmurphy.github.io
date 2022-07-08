# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "kellenmurphy-github-io"
  spec.version       = "0.1.0"
  spec.authors       = ["Kellen Murphy"]
  spec.email         = ["me@kellenmurphy.com"]
  spec.summary       = "Jekyll theme for kellenmurphy.github.io"
  spec.homepage      = "https://kellenmurphy.com"
  spec.license       = "MIT"
  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }
  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
