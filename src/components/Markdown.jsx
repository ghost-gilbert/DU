import React from 'react'
import './Markdown.css'

const Markdown = () => {

    return (
        <div className="content">
            <div range="msvc-170">
                <h2 id="visual-studio-2022-installation">Visual Studio 2022 installation</h2>
                <p>Welcome to Visual Studio 2022! In this version, it's easy to choose and install just the
                    features you need.
                    Because of its reduced minimum footprint, Visual Studio installs quickly and with less
                    system impact.</p>
                <div className="NOTE">
                    <h5>Note</h5>
                    <p>This article applies to installation of Visual Studio on Windows. <a
                        href="https://code.visualstudio.com">Visual Studio Code</a> is a lightweight,
                        cross-platform development
                        environment that runs on Windows, Mac, and Linux systems. The Microsoft <a
                            href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools">C/C++
                            for Visual Studio
                            Code</a> extension supports IntelliSense, debugging, code formatting,
                        autocompletion. Visual Studio for
                        Mac doesn't support Microsoft C++, but does support .NET languages and cross-platform
                        development. For
                        installation instructions, see <a href="/visualstudio/mac/installation/">Install Visual
                            Studio for
                            Mac</a>.</p>
                </div>
                <p>To learn what else is new in this version, see the Visual Studio <a
                    href="/visualstudio/releases/2022/release-notes/">release notes</a>.</p>
                <p>Ready to install? Use the following step-by-step guide.</p>
                <h3 id="step-1---prepare-your-computer-for-visual-studio">Step 1 - Prepare your computer for
                    Visual Studio
                </h3>
                <p>Before you begin installing Visual Studio:</p>
                <ol>
                    <li>
                        <p>Check the <a href="/visualstudio/releases/2022/system-requirements">system
                            requirements</a>. These
                            requirements help you know whether your computer supports Visual Studio 2022.</p>
                    </li>
                    <li>
                        <p>Apply the latest Windows updates. These updates ensure that your computer has both
                            the latest security
                            updates and the required system components for Visual Studio.</p>
                    </li>
                    <li>
                        <p>Reboot your computer. The reboot ensures that any pending installs or updates don't
                            hinder the Visual
                            Studio install.</p>
                    </li>
                    <li>
                        <p>Free up disk space. Remove unneeded files and applications from your %SystemDrive%
                            by, for example,
                            running the Disk Cleanup app.</p>
                    </li>
                </ol>
                <p>For questions about running previous versions of Visual Studio side by side with Visual
                    Studio 2022, see
                    the <a href="/visualstudio/releases/2022/compatibility/">Visual Studio 2022 Platform
                        Targeting and
                        Compatibility</a> page.</p>
                <h3 id="step-2---download-visual-studio">Step 2 - Download Visual Studio</h3>
                <p>Select the following button to go to the Visual Studio download page, and download the Visual
                    Studio
                    bootstrapper file. Select the edition of Visual Studio that you want and choose the
                    <strong>Free
                        trial</strong> or <strong>Free download</strong> button.
                </p>
                <div className="button">
                    <p><a href="https://visualstudio.microsoft.com/downloads/">Download Visual Studio</a></p>
                </div>
                <div className="TIP">
                    <h5>Tip</h5>
                    <p>The Community edition is for individual developers, classroom learning, academic
                        research, and open
                        source development. For other uses, install Visual Studio 2022 Professional or Visual
                        Studio 2022
                        Enterprise.</p>
                </div>
            </div>
        </div>
    )
}

export default Markdown