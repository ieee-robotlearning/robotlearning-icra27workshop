# Robot Learning in the Era of Foundation Models

Workshop website for the ICRA 2027 half-day workshop on standardization, benchmarking, and real-world evaluation of robot learning.

## Local Development (Ubuntu)

1. **Install Ruby and Bundler**

```bash
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev
sudo gem install bundler
```

2. **This avoids permission issues**
```bash
echo 'export GEM_HOME="$HOME/.gem"' >> ~/.bashrc
echo 'export PATH="$HOME/.gem/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

3. **Install Jekyll and dependencies**

```bash
bundle install
```

4. **Run the local server**

```bash
jekyll serve
```

5. **View the site**

Open your browser to: [http://localhost:4000](http://localhost:4000)

## Local Development (macOS)

The Ruby that ships with macOS is too old for this site. Install a current Ruby with Homebrew, then use the Bundler version recorded in `Gemfile.lock`.

1. **Install the Xcode command line tools** (needed to compile native gems)

```bash
xcode-select --install
```

2. **Install Homebrew**, if you do not already have it, from [https://brew.sh](https://brew.sh).

3. **Install Ruby**

```bash
brew install ruby
```

4. **Put Homebrew’s Ruby first on your PATH**

```bash
echo 'export PATH="$(brew --prefix ruby)/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

Confirm the shell is no longer using `/usr/bin/ruby`:

```bash
which ruby
ruby -v
```

5. **Install Bundler 4.0.5 and the site dependencies**

From the project directory:

```bash
gem install bundler -v 4.0.5
bundle config set --local build.eventmachine "--with-cxxflags=-isystem$(xcrun --sdk macosx --show-sdk-path)/usr/include/c++/v1"
bundle install
```

The `eventmachine` line is required on current macOS. A leftover Command Line Tools directory, `/Library/Developer/CommandLineTools/usr/include/c++`, hides the real C++ headers, so the gem fails with `'iostream' file not found`. The flag has to be one word (`-isystem/path`, with no space) so Bundler passes it through intact.

6. **Run the local server**

```bash
bundle exec jekyll serve
```

7. **View the site**

Open your browser to: [http://localhost:4000](http://localhost:4000)

---

If you encounter dependency issues, try removing `Gemfile.lock` and running `bundle install` again.


This repository was initialized from a previous workshop page, which is based on https://github.com/simulaterobotworlds/simulaterobotworlds.github.io/, https://github.com/objects-structure-causality/objects-structure-causality.github.io, https://github.com/orlrworkshop/orlrworkshop.github.io, https://github.com/oolworkshop/oolworkshop.github.io, and https://github.com/baicsworkshop/baicsworkshop.github.io/.
