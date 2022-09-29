# Changelog

## [v5.2.0] - 2022-03-24

# Minor Patch Release

### Recommended Action

- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [x]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Fix rare upload boundary conditions where the trailing CRLF could get prepended to the uploaded file
* Fix websParseCookie return value when cookie is not found

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)

## [v5.1.7] - 2022-02-15

# Minor Patch Release

### Recommended Action

- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [x]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Fix cookie parsing to be more spec compliant #307

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)

## [v5.1.6] - 2022-02-07

# Important Security Release

### Recommended Action

- [x]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Fix host header injection into redirects. #309

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)

## [v5.1.5] - 2021-10-12

# Important Security Release

### Recommended Action

- [x]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Fix upload file environment variables not being prefixed with CGI. #305

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)

## [v5.1.4] - 2021-08-10

# Minor Patch Release

### Recommended Action

- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [x]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Use constant time password comparison

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)

## [v5.1.3] - 2021-06-19

# Minor Patch Release

### Recommended Action

- [x]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* A fix for serving content with the wrong handler: #300
* Change to use our new evaluation license for pre-sale
* A fix to socket.c for 64-bit use with very large numbers of file descriptors
* A fix to not emit more data after the content-length is set, if the file to be served is written to and grows in length. #299.
* Fix encoding of directories in responses #301

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v5.1.2] - 2021-04-06

# Minor Release

### Recommended Action

- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [x]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Fix building on Arm 64  #
* Make Digest authentication nonce duration configurable. Issue #297
* Fix decoding %00 characters in URLs. Issue #298

### Build Requirements

- To build, requires MakeMe 1.0.2 or later
- To install packages, use Pak 1.0.4 or later

### Thanks

Bosch PSIRT for reporting the nonce duration issue

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v5.1.1] - 2020-01-17

# Minor Release

### Recommended Action

- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [x]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Fix VxWorks compilation cast

### Build Requirements

- To build, requires MakeMe 1.0.2 or later
- To install packages, use Pak 1.0.4 or later

### Thanks

Thanks to Zhao, Jianlin at WindRiver for reporting

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v5.1.0] - 2019-11-22

# Minor Release

### Recommended Action

- [x]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Fix #291 Support TLSv1.3 configuration and enabling
* Fix for building on BSD systems
* Fix #287 File upload use after free
* Fix #288 High CPU use during file upload

### Build Requirements

- To build, requires MakeMe 1.0.2 or later
- To install packages, use Pak 1.0.3 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v5.0.0] - 2019-08-25

# Minor Release

### Recommended Action

- [x]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Fix header parsing bug causing OOB reference and potential DOS
* Fix compiler warnings

### Build Requirements

- To build, requires MakeMe 1.0 or later
- To install packages, use Pak 1.0 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v4.1.3] - 2021-05-20

# Minor Release

### Recommended Action

- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [x]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Update license to use new evaluation license

### Build Requirements

- To build, requires MakeMe 1.0.2 or later
- To install packages, use Pak 1.0.4 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)

## [v4.1.1] - 2019-08-24

# Minor Release

### Recommended Action

- [x]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Fix header parsing bug causing OOB reference and potential DOS
* Fix compiler warnings

### Build Requirements

- To build, requires MakeMe 1.0 or later
- To install packages, use Pak 1.0 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v4.1.0] - 2018-12-14

# Minor Release

### Recommended Action

- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [x]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Support both OpenSSL 1.0 and 1.1 streams
* Improve windows building
* Support VS 2017 professional and community editions
* Fix multiple response cookies

### Build Requirements
- To build, requires MakeMe 1.0 or later
- To install packages, use Pak 1.0 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v4.0.2] - 2018-04-17

# Minor Patch Release

### Recommended Action
- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [x]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Upgrade to match new Pak release (0.12.4) and using pak.json instead of package.json
* Update for OpenSSL 1.1.0 and Mbedtls 2.8.0
* Update for Alpine linux

### Build Requirements
- To build, requires MakeMe 0.10.8 or later
- To install packages, use Pak 0.12.4 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v4.0.1] - 2018-02-13

# Security Patch Release

### Recommended Action
- [x]  Essential Upgrade -- All users strongly advised to upgrade
- [  ]  Recommended Upgrade -- Upgrade recommended but not essential
- [  ]  Optional Upgrade -- Upgrade only if convenient

### Change Log

* Fix denial of service #264

### Build Requirements
- To build, requires MakeMe 0.10.6 or later
- To install packages, use Pak 0.12.2 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v4.0.0] - 2017-09-22

# Major Release

### Recommended Action
- [  ]  Essential Upgrade -- All users strongly advised to upgrade
- [x]  Recommended Upgrade -- Upgrade recommended but not essential
- [  ]  Optional Upgrade -- Upgrade only if convenient

### Change Log
- Remove deprecated APIs
- Strengthen read-only API parameters by changing "char*" to "const char*"
- Add limit for number of CGI args
- Fix upload requests missing the "name" field that caused a DoS for malformed requests
- Fix invalid memory reference upload handler
- Support Visual Studio 2017
- Documentation updates

### Build Requirements
- To build, requires MakeMe 0.10.6 or later
- To install packages, use Pak 0.12.2 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.6.5] - 2017-06-09

# Important Security Release

### Recommended Action
- [x]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log
- Fix remote code injection into dynamically linked CGI programs on Linux
- Fix crash when pruning sessions that have been recreated
- Add CGI variable prefix cgiVarPrefix in main.me
- Fix memory leak with SSL load test

### Build Requirements
- To build, requires MakeMe 0.10.4 or later
- To install packages, use Pak 0.12.1 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.6.4] - 2017-06-08

# Minor Patch Release

### Recommended Action
- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [x]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log
- Support new build farm
- Fix memory leak in websCryptPassword, websCheckPassword
- Fix websRunEvents delay calculation
- Fix memory leak in websProcessUplaodData
- Doc updates

### Build Requirements
- To build, requires MakeMe 0.10.4 or later
- To install packages, use Pak 0.12.1 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.6.3] - 2016-06-02

# Minor Patch Release

### Recommended Action
- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [x]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log
- Upgrade to mbedtls 2.2.1
- Fix importing openssl libraries when building
- Add openssl renegotiation controls via main.me: ssl.handshakes
- Fix missing va_end in jsArgs
- Add missing initializer to websRomIndex
- Improve BPUT macros
- Add websSetLogLevel and snclone APIs
- Add issue template
- Fix busy wait on socket disconnect
- Fix handling negative timezones and offsets
- Add VxWorks 7 support
- Fix cross compiling sleuthing the cross compiler options
- Fix using --set compiler.has\* configuration options
- Added fortification to compiler options and ASLR

### Build Requirements
- To build, requires MakeMe 0.10.4 or later
- To install packages, use Pak 0.12.1 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.6.2] - 2015-12-28

# Minor Patch Release

### Recommended Action
- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [x]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log
- Fix unportable websGetRandomBytes
- Fix conditional compilation issues with various configure options
- Don't close log file handle if using stdout

### Build Requirements
- To build, requires MakeMe 0.10.0 or later
- To install packages, use Pak 0.12.0 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.6.1] - 2015-12-07

# Minor Patch Release

### Recommended Action
- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [x]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log
- Fix compiling with upload and rom support
- Add missing cpluscplus protection
- Fix double free in websSetRequestFilename
- Fix CPU hog with boundary condition for chunked PUT requests.

### Build Requirements
- To build, requires MakeMe 0.10.0 or later
- To install packages, use Pak 0.12.0 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.6.0] - 2015-11-30

# Minor Feature Release

### Recommended Action
- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [x]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log
- Fix memory leaks on error paths
- Fix handling requests on the error path
- Fix ROM (no file system) support
- Fix CPU hog handling some invalid requests
- Update API stability classifications
- Prototype Blowfish password encryption APIs
- Other fixes

### Build Requirements
- To build, requires MakeMe 0.10.0 or later
- To install packages, use Pak 0.12.0 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.5.0] - 2015-09-24

# Minor Feature Release

### Recommended Action
- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [x]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log
- Add MbedTLS support for 2.1.1
- Fix event handling for past due events
- Improve checking of memory allocations
- Fix memory leaks with some error paths
- Fix checking negative time delays
- Improve wfree and assert

### Build Requirements
- To build, requires MakeMe 0.10.0 or later
- To install packages, use Pak 0.12.0 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.4.12] - 2015-08-26

# Minor Patch Release

### Recommended Action
- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [x]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log
- Add configure.bat so windows users can just "configure"
- Update documentation about GoAhead handlers
- Convert unit tests to use TestMe
- Fix CGI issues on windows
- String conversion API: itosbuf fix

### Build Requirements
- To build, requires MakeMe 0.9.3 or later
- To install paks, use Pak 0.11.3 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.4.11] - 2015-08-13

# Minor Patch Release

### Recommended Action
- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [x]  Recommended Upgrade -- Upgrade recommended but not essential
- [ ]  Optional Upgrade -- Upgrade only if convenient

### Change Log
- Fix memory leak when shutting down server
- Fix sslRead not completing for very large POST requests on windows

### Build Requirements
- To build, requires MakeMe 0.9.2 or later
- To install paks, use Pak 0.11.3 or later

### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.4.10] - 2015-07-20

# Minor Patch Release

## Recommended Action
- [ ]  Essential Upgrade -- All users strongly advised to upgrade
- [ ]  Recommended Upgrade -- Upgrade recommended but not essential
- [x]  Optional Upgrade -- Upgrade only if convenient

### Change Log
- Fix Makefiles with double quotes around OpenSSL paths
- Fix websJstWrite

#### Build Requirements
- To build, requires MakeMe 0.9.1 or later
- To install paks, use Pak 0.11.2 or later

#### See
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.4.9] - 2015-06-23

### Minor Patch Release
- Fix memory leak websError with no log option

### Build Requirements
- To build, requires MakeMe 0.9.0 or later
- To install paks, use Pak 0.11.1 or later

See:
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.4.8] - 2015-06-17

### Minor Patch Release
- Fix memory leak in digest authentication
- Improve documentation sidebar
- Add documentation stability classifications

### Build Requirements
- To build, requires MakeMe 0.9.0 or later
- To install paks, use Pak 0.11.1 or later

See:
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.4.7] - 2015-06-11

### Minor Patch Release
- Fix file upload rejecting the client-side filename
- Group SSL configuration into one main.me paragraph

### Build Requirements
- To build, requires MakeMe 0.8.10 or later
- To install paks, use Pak 0.11.0 or later

See:
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.4.6] - 2015-06-08

### Minor Patch Release
- Configure SSL

### Build Requirements
- To build, requires MakeMe 0.8.9 or later
- To install paks, use Pak 0.10.3 or later

See:
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.4.5] - 2015-06-05

### Minor Patch Release
- Fix empty Webs.ipaddr and Webs.ifaddr fields for keep-alive requests
- Convert to use SSL packages mpr-openssl, mpr-matrixssl, mpr-nanossl, mpr-mbedtls
- Improve configurable makefiles
- Update CA root certificate bundle
- Fix masterSecret in digest authentication
- Fix memory leak in digest authentication
- Fix response error for huge files when output socket is saturated.
- Fix socketInfo for VxWorks when IP is null
- Fix unwanted asserts

### Build Requirements
- To build, requires MakeMe 0.8.7 or later
- To install paks, use Pak 0.10.1 or later
- For Expansive, use Expansive 0.5.1 or later

See:
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.4.4] - 2015-04-14

Minor Patch Release.
- Stealthy error messages
- Fix digest authentication validating bad auth details
- Add APIs for modifying user passwords at runtime
- Fix for high CPU usage in some scenarios

### Build Requirements
- To build, requires MakeMe 0.8.6 or later
- To install paks, use Pak 0.10.0 or later
- For Expansive, use Expansive 0.5.0 or later

See:
- [Download](https://embedthis.com/goahead/download.html)
- [Documentation](https://embedthis.com/goahead/doc/index.html)


## [v3.4.3] - 2015-01-16

Minor Patch Release.
- Fix CGI memory leak.

See:
- [Download](https://embedthis.com/goahead/download.html).
- [Documentation](https://embedthis.com/goahead/doc/index.html).


## [v3.4.2] - 2014-11-25

Security Patch Release.
- Fix for directory traversal threat.

See:
- [Change Log](https://github.com/embedthis/goahead-doc/issues?q=milestone%3A3.4.2).
- [Download](https://embedthis.com/goahead/download.html).
- [Documentation](https://embedthis.com/goahead/doc/index.html).


## [v3.4.1] - 2014-10-31

Minor feature release.
- Fix for POODLE threat.
- Add trace for release builds.

See:
- [Change Log](https://github.com/embedthis/goahead-doc/issues?q=milestone%3A3.4.1).
- [Download](https://embedthis.com/goahead/download.html).
- [Documentation](https://embedthis.com/goahead/doc/index.html).


## [v3.4.0] - 2014-09-13

Issues addressed by this release:
- [Change Log](https://github.com/embedthis/goahead-doc/issues?q=milestone%3A3.4.0).
- [Download](https://embedthis.com/goahead/download.html).
- [Documentation](https://embedthis.com/goahead/doc/index.html).

## Notes
- Two fixes. One for an SSL Post request stall and one for websWrite returning zero.


## v3.3.6 - 2014-08-21

Issues addressed by this release:
- [Change Log](https://github.com/embedthis/goahead-doc/issues?q=milestone%3A3.3.6).

## Notes
- Two fixes. One for an SSL Post request stall and one for websWrite returning zero.


##  v3.3.5

### Changes

* Fix writing large files to slow connections.

## v3.3.4

### Fixes

* Unset wp->route when building without authentication


## v3.3.3

* Add EPROTO definition in osdep.h for windows
* Fix memory leaks


## v3.3.2

### Fixes

* Add mime type for MP4


## v3.3.1

### Fixes

* parseDigestDetails incorrectly parses digest header

## v3.3.0

### Features

* Add new handler callback "match" to allow routing before processing body data.

### Fixes

* Return 404 if no suitable route found
* Fix bad memory free in websListen.
* Fix parsing request URI.
* Fix case when URL has ":" but no port. strncpy with src == dest.</li>
* Fix case where query has "#" fragment.</li>
* Fix case where invalid URL has no path</li>

### Incompatible API Changes

* websDefineHandler has a new parameter for the optional match callback. Handlers should match requests in their match callback instead of returning true/false from their service callback.
* The GoAhead request router will now select the route for a request, run authentication and then the invoke the handler match callback. After all request content is received, the the handler service routine will be called. Previously, authentication was run after receiving body content.

## v3.2.1

### Fixes

* Fix redirection for URIs ending in "/" on windows

## v3.2.0

## Fixes
* Update license

## v3.1.4

### Features

* Deprecate Windows XP and Vista
* Fix Windows 8.1 SDK support for building

## Fixes
* gethostbyname for MAC OS X where .local must be appended.
* Projects without -O2 for debug builds
* Fixes building on Linux 2.4 which lacks sendfile64.
* Fix readpassphrase for BSD
* Add uninstall script for bit install
* Make epoll and eventfd conditional based on linux version


## v3.1.3

### Fixes

* Fix upload temp filename
* Fix file upload with incomplete boundaries

## v3.1.2

### Features

* Add self-signed cert and enable SSL by default
* Improve generated makefiles using top level CFLAGS, LDFLAGS

### Fixes

* Fix CPU setting in "configure --platform os-arch:CPU"
* Fix compiling with C++ programs on windows by removing TSZ define
* Fix websRedirect for host with non-default port.
* Fix websDecodeUrl documentation. Had arguments reversed.

## v3.1.1

### Features

* Add ME_GOAHEAD_CLIENT_CACHE and ME_GOAHEAD_CLIENT_CACHE_LIFESPAN defines
* Add session variable to record successful or failed logins
* Add static makefiles

### Fixes

* Socket writes to a blocking socket.
* Fix VxWorks default stack size
* Fix consuming body input for form vars
* Fix bad "request exceeded parse timeout" message
* Fix parsing ASC format if-modified dates and 304 Not-Modified responses.
* Fix Date/Last-Modified dates to be in GMT
* Fix websSetCookie for localhost
* Update API stability classifications
* Improve conditional makefiles to support SSL
* Fix make/bit install for non-root installations
* Add "public" to cookies over SSL for firefox
* Fix bad memory free using free instead of wfree

## v3.1.0

### Features

* Change tunable defines so they can be overridden via configure. These are now all named: ME_*.
* Add support for the Mocana SSL stack:
* Add prototype support for the MbedTLS SSL stack:
* Add make install, uninstall
* Add bit install, uninstall

### Fixes

* The mpr.h header has been split into a cross platform operating system layer called bitos.h. The mpr.h header includes this, so there should be no API impact.
* Remove compiler switch -mtune when not required
* Fix generated makefiles determining the system CPU architecture
* Optimize socket I/O

## v3.0.0

This is the first Embedthis edition of the GoAhead web server.

### Features

* Enhanced HTTP/1.1 support
* IPv6 protocol support
* HTTP/1.1 Chunking transmit and receive data
* Support for PUT, DELETE, OPTIONS and TRACE methods
* File upload
* Web form based authentication
* New User/Role/Ability authorization framework for granular access control
* Sessions and session state storage
* Security sandbox resource limits
* Configurable routing matching by URI, extension, protocol, methods and user authorization
* URL redirections
* Configurable build options
* OpenSSL support

### Fixes

* Extensive code review and clean up
* Faster
* Smaller footprint. Legacy code removed. 30% less code!

<a id="2.0.0"></a>
<h2 >Changes in 2.X</h2>
<p>The GoAhead web server was originally written by Michael O'Brien when he founded GoAhead Software.
Since the acquisition of GoAhead by Oracle, Oracle asked Embedthis to support existing GoAhead customers
and to offer commercial licenses for GoAhead. Embedthis has now significantly upgraded
GoAhead with features and security fixes. GoAhead is now more popular than ever.</p>

## [v2.1.8] - 2018-12-22

# Legacy 2.1.8 Release

## [v2.1.5] - 2018-12-22

# Legacy 2.1.5 Release
